from api.models import User, Question, Quiz
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "email")


class addQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = "__all__"


class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        exclude = [
            "answer",
        ]


class AddQuizSerializer(serializers.ModelSerializer):
    # questions = addQuestionSerializer(many=True)

    class Meta:
        model = Quiz
        fields = "__all__"

        extra_kwargs = {
            "quiz_title": {"read_only": True},
        }


# class TakeQuizSerializer(serializers.Serializer):
#     question = serializers.PrimaryKeyRelatedField(queryset=Question.objects.all())
#     answer = serializers.CharField()


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = "__all__"


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token["full_name"] = user.profile.full_name
        token["username"] = user.username
        token["email"] = user.email
        token["bio"] = user.profile.bio
        token["image"] = str(user.profile.image)
        token["verified"] = user.profile.verified
        # ...
        return token


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password]
    )
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ("email", "username", "password", "password2")

    def validate(self, attrs):
        if attrs["password"] != attrs["password2"]:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."}
            )

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data["username"], email=validated_data["email"]
        )

        user.set_password(validated_data["password"])
        user.save()

        return user

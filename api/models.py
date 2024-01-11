from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError
from django.utils.text import slugify


class User(AbstractUser):
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def profile(self):
        profile = Profile.objects.get(user=self)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=1000)
    bio = models.CharField(max_length=100)
    sex = models.CharField(max_length=50, default="male")
    country = models.CharField(max_length=300, default="Nigeria")
    profession = models.CharField(max_length=300, default="developer")
    image = models.ImageField(upload_to="user_images", default="default.jpg")
    verified = models.BooleanField(default=False)


def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()


post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)


Quiz_CHOICES = (
    ("Backend", "Backend"),
    ("Frontend", "Frontend"),
)


class Quiz(models.Model):
    questions = models.ManyToManyField("Question", blank=True)
    quiz_title = models.CharField(
        max_length=200, choices=Quiz_CHOICES, default="Backend"
    )
    num_questions = models.IntegerField(default=0)

    def __str__(self):
        return self.quiz_title

    def add_question(self, question):
        if self.questions.count() > self.num_questions:
            return False
        self.questions.add(question)
        return True


class Question(models.Model):
    # quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    question = models.CharField(max_length=500, null=True)
    option1 = models.CharField(max_length=250, null=True)
    option2 = models.CharField(max_length=250, null=True)
    option3 = models.CharField(max_length=250, null=True)
    option4 = models.CharField(max_length=250, null=True)
    answer = models.CharField(max_length=250, null=True)

    def __str__(self):
        return self.question


class UserQuiz(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)

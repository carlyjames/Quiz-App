from django.forms import ModelForm
from .models import *


class QuizForm(ModelForm):
    class Meta:
        model = Quiz
        fields = "__all__"

    def clean(self):
        questions = self.cleaned_data.get("questions")
        num_questions = self.cleaned_data.get("num_questions")
        if questions.count() > num_questions:
            raise ValidationError(
                "You have exceeded the maximum number of questions for this quiz"
            )
        print(self.cleaned_data)

from django.shortcuts import render
from django.http import JsonResponse
from api.models import *
from api.serializer import (
    MyTokenObtainPairSerializer,
    RegisterSerializer,
    addQuestionSerializer,
    QuizSerializer,
    RandomQuestionSerializer,
    QuestionSerializer,
)

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from django.http import HttpResponse
from rest_framework.views import APIView


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


# Get All Routes

# @api_view(['GET'])
# def getRoutes(request):
#     routes = [
#         '/api/token/',
#         '/api/register/',
#         '/api/token/refresh/'
#     ]
#     return Response(routes)


@api_view(["GET", "POST"])
@permission_classes([IsAuthenticated])
def dashboard(request):
    if request.method == "GET":
        context = f"Hey {request.user}, you are seeing a get request"
        return Response({"response": context}, status=status.HTTP_200_OK)
    elif request.method == "POST":
        text = request.POST.get("text")
        response = f"Hey {request.user}, your text is {text}"
        return Response({"response": context}, status=status.HTTP_200_OK)

    return Response({}, status=status.HTTP_400_BAD_REQUEST)


class AddQuestion(generics.CreateAPIView):
    serializer_class = addQuestionSerializer

    def AddQuestion(request):
        serializer_class = addQuestionSerializer(data=request.data)
        if request.user.is_staff:
            if serializer_class.is_valid():
                serializer_class.save()
            return Response(serializer_class)
        else:
            return None


# Generating random questions based on the category
class RandomQuestion(APIView):
    def get(self, request, format=None, **kwargs):
        question = Question.objects.filter(category=kwargs["stack"]).order_by("?")[:1]
        serializer = RandomQuestionSerializer(question, many=True)
        return Response(serializer.data)


# listing all the question based on the category
class ListQuestion(APIView):
    def get(self, request, format=None, **kwargs):
        question = Question.objects.filter(category=kwargs["stack"])
        serializer = QuestionSerializer(question, many=True)
        return Response(serializer.data)


class QuizQuestionView(APIView):
    def get(self, request):
        question = Question.objects.all().order_by("?")[:1]
        question_data = QuizSerializer(question, many=True).data
        return Response(question_data)

    def check_answer(self, question_id, answer):
        question = Question.objects.get(pk=question_id)
        return question.answer == answer

    def post(self, request):
        # questions = Question.objects.all()

        # print(request.data)
        score = 0
        correct = 0
        wrong = 0
        total = 0
        questions = request.data["questions"]
        # print(questions)
        for question in questions:
            # print(question)
            total += 1
            if self.check_answer(question["question"], question["answer"]):
                correct += 1
                score += 10
            else:
                wrong += 1

        response_data = {
            "score": score,
            "correct": correct,
            "total": total,
            "wrong": wrong,
        }

        return Response(response_data)

    # def get_serializer_class(self):
    # if self.request.method == "POST":
    #    return TakeQuizSerializer
    #  elif self.request.method == "GET":
    #      return QuestionSerializer

    # queryset = Question.objects.all()

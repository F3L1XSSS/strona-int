from django.views import View
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView


class TestViewSet(APIView):

    def get(self, request):
        test_value = "Hello, Keks!"
        data = {"test": test_value,
                "test2": "You`re grumpy potato"},
        return Response(data,
                        status=status.HTTP_200_OK)

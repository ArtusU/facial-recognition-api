from django.shortcuts import render
from django.contrib.auth import get_user_model

from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK
from rest_framework.views import APIView


User = get_user_model()

class FileUploadView(APIView):
    permission_classes = (AllowAny, )

    def post(self, request, *args, **kwargs):
        return Response({"test": True}, status=HTTP_200_OK)


class UserEmailView(APIView):
    permission_classes = (IsAuthenticated, )

    def get(self, request, *args, **kwargs):
        key = request.META.get("HTTP_AUTHORIZATION").split(' ')[1]
        token = Token.objects.get(key=key)
        user = User.objects.get(id=token.user_id)
        obj = {'email': user.email}
        return Response(obj)


class ChangeEmailView(APIView):
    permission_classes = (IsAuthenticated, )

    def post(self, request, *args, **kwargs):
        return Response({"test": True}, status=HTTP_200_OK)
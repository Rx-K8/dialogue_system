from rest_framework import generics

from ChatBotAPI.models import SystemMessage
from ChatBotAPI.serializers import SystemMessageSerializer
from rest_framework.response import Response
from rest_framework import status


class SystemMessageList(generics.ListCreateAPIView):
    queryset = SystemMessage.objects.all()
    serializer_class = SystemMessageSerializer

    def post(self, request, format=None):
        serializer = SystemMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SystemMessageDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = SystemMessage.objects.all()
    serializer_class = SystemMessageSerializer

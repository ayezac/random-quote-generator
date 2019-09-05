from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from quotes.models import Quote
from quotes.serializers import QuoteSerializer
from rest_framework.views import APIView

# Create your views here.
class QuoteList(APIView):
    def get(self, request, format=None):
        quote = Quote.objects.all()
        serializer = QuoteSerializer(quote, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        data = request.data
        serializer = QuoteSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

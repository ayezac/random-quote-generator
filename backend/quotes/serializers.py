from rest_framework import serializers, fields
from .models import Quote

class QuoteSerializer(serializers.Serializer):
    id = fields.IntegerField(read_only=True)
    text = fields.CharField()
    author = fields.CharField(max_length=300)

    def create(self, validated_data):
        return Quote.objects.create(**validated_data)
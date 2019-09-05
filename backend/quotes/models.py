from django.db import models

# Create your models here.
class Quote(models.Model):
    text = models.TextField(null=False)
    author = models.CharField(max_length=300, null = True, default = "Anonymous")
    
    def __str__(self):
        return self.text + self.author

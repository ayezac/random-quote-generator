from django.urls import path, include
from . import views

app_name = 'quotes'
urlpatterns = [
    path('quotes/', views.QuoteList.as_view(), name='quotes')
]


from django.urls import path
from . import views


urlpatterns = [
    path('', views.home),
    path('about-me', views.about),
    path('services', views.services),
    path('documents', views.documents),
]
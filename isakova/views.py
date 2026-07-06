from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def services(request):
    return render(request, 'services.html')

def documents(request):
    return render(request, 'documents.html')
def contacts(request):
    return render(request, 'contacts.html')
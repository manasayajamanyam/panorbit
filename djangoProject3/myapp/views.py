from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse


def index(request):
    return render(request, "index.html")


def profile(request):
    return render(request, "profile.html")
def comingsoon(request):
    return render(request, "Comingsoon.html")

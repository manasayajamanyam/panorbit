from django.urls import path

from django.urls import include, path

from . import views

urlpatterns = [
    path('index.html'
         , views.index, name='index'),
    path('profile.html',views.profile, name='profile'),
    path('Comingsoon.html', views.comingsoon, name='comingsoon')

]
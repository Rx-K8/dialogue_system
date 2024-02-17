from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from ChatBotAPI import views

urlpatterns = [
    path('system-messages/', views.SystemMessageList.as_view()),
    path('system-messages/<int:pk>/', views.SystemMessageDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
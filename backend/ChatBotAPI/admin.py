from django.contrib import admin
from .models import UserMessage, SystemMessage

admin.site.register(UserMessage)
admin.site.register(SystemMessage)

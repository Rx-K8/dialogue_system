from django.db import models


class UserMessage(models.Model):
    message = models.TextField()

    def __str__(self):
        return self.message


class SystemMessage(models.Model):
    message = models.TextField()

    def __str__(self):
        return self.message

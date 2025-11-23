from .base import *

DEBUG = False

ALLOWED_HOSTS = env("DJANGO_ALLOWED_HOSTS", default=[])

# Database
# https://docs.djangoproject.com/en/5.2/ref/settings/#databasesu

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "postgres",
        "USER": "postgres",
        "PASSWORD": "postgres",
        "HOST": "db",
        "PORT": "5432",
    }
}

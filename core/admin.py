from django.contrib import admin
from .models import User, Payment, Membership

admin.site.register(User)
admin.site.register(Payment)
admin.site.register(Membership)

from django.contrib import admin
from .models import User, Payment, Membership, File, TrackedRequest

admin.site.register(User)
admin.site.register(Payment)
admin.site.register(Membership)
admin.site.register(File)
admin.site.register(TrackedRequest)

from django.contrib import admin
from .models import Pattern
from .models import Activity
from .models import ActivityPattern
from .models import Resource
from .models import ResourceRole
from .models import PatternResource
from .models import Role


admin.site.register(Pattern)
admin.site.register(Activity)
admin.site.register(ActivityPattern)
admin.site.register(Resource)
admin.site.register(ResourceRole)
admin.site.register(PatternResource)
admin.site.register(Role)
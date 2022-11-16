from django.db import models

# Create your models here.
class Pattern(models.Model):
    pattern_name = models.CharField(max_length=255)
    pattern_description = models.TextField()
    pattern_created_at = models.DateTimeField(auto_now_add=True)
    pattern_updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.pattern_name


class Activity(models.Model):
    activity_name = models.CharField(max_length=255)
    def __str__(self):
        return self.activity_name


class ActivityPattern(models.Model):
    activity_position = models.IntegerField()
    activity_time = models.IntegerField()
    pattern = models.ForeignKey("Pattern", on_delete=models.CASCADE, default=1)
    activity = models.ForeignKey("Activity", on_delete=models.CASCADE, default=1)

    def __str__(self):
        return f"{str(self.pattern)}-{str(self.activity)}"


class Resource(models.Model):
    resource_name = models.CharField(max_length=255)
    def __str__(self):
        return self.resource_name


class PatternResource(models.Model):
    pattern = models.ForeignKey("Pattern", on_delete=models.CASCADE, default=1)
    resource = models.ForeignKey("Resource", on_delete=models.CASCADE, default=1)
    resource_available_time = models.IntegerField()

    def __str__(self):
        return f"{str(self.pattern)}-{str(self.resource)}"


class Role(models.Model):
    role = models.CharField(max_length=255)

    def __str__(self):
        return self.role


class ResourceRole(models.Model):
    role = models.ForeignKey("Role", on_delete=models.CASCADE, default=1)
    resource = models.ForeignKey("Resource", on_delete=models.CASCADE, default=1)

    def __str__(self):
        return f"{str(self.resource)}-{str(self.role)}"
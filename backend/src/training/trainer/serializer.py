from rest_framework import serializers
from .models import Pattern, Activity, ActivityPattern

class PatternSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pattern
        fields = ['id', 'pattern_name', 'pattern_description']

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ['id', 'activity_name']

class ActivityPatternSerializer(serializers.ModelSerializer):
    activity = serializers.CharField(source='activity.activity_name')
    class Meta:
        model = ActivityPattern
        fields = ['activity_position','activity', 'activity_time']

class ActivityPatternInsertSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActivityPattern
        fields = ['activity_position','activity', 'activity_time']

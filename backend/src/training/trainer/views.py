from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Pattern, Activity, ActivityPattern
from .serializer import PatternSerializer, ActivitySerializer, ActivityPatternSerializer, ActivityPatternInsertSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Get all patterns and create a new pattern
@api_view(['GET', 'POST'])
def pattern_list(request):
    if request.method == 'GET':
        try:
            patterns = Pattern.objects.all().order_by('id')
        except Pattern.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = PatternSerializer(patterns, many=True)
        return Response({"trainings": serializer.data})
    
    if request.method == 'POST':
        serializer = PatternSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

# Get a pattern, update a patter and delete a pattern
@api_view(['GET', 'PUT', 'DELETE'])
def pattern_detail(request, id):

    try:
        pattern = Pattern.objects.get(pk=id)
    except Pattern.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PatternSerializer(pattern)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = PatternSerializer(pattern, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        pattern.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    


#Get All Activities and create activity
@api_view(['GET', 'POST'])
def activity_list(request):
    if request.method == 'GET':
        try:
            activities = Activity.objects.all().order_by('id')
        except Activity.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        print(activities)
        serializer = ActivitySerializer(activities, many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = ActivitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


# Activity
@api_view(['GET', 'PUT', 'DELETE'])
def activity_detail(request, id):

    try:
        activity = Activity.objects.get(pk=id)
    except Pattern.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ActivitySerializer(activity)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ActivitySerializer(activity, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        activity.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# Get all activities per training
@api_view(['GET', 'POST'])
def activity_list_per_training(request, id):
    try:
        pattern = Pattern.objects.get(pk=id)
    except Pattern.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    try:
        activities_per_training = ActivityPattern.objects.all().filter(pattern = pattern.pk).order_by('activity_position')
    except ActivityPattern.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ActivityPatternSerializer(activities_per_training, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = ActivityPatternInsertSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

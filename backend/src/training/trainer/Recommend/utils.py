from enum import Enum
from ..models import Pattern, Activity, ActivityPattern

# methods to check next activity
def recommend_activity (data, id):
    print()



#Enum class for all the status to be returned
class Status (Enum):
    ALLOWED = "ALLOWED"
    BLOCKED = "BLOCKED"
    DENIED = "DENIED"
    CONTINUED = "CONTINUED"
    
from rest_framework import routers

from {{ cookiecutter.project_slug }}.posts.viewsets import PostViewSet


router = routers.DefaultRouter()
router.register(r'posts', PostViewSet)

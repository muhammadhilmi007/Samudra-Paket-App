#!/bin/bash
# Development utilities for Samudra ERP Docker environment

# Set colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to display help
show_help() {
  echo -e "${GREEN}Samudra ERP Development Docker Utilities${NC}"
  echo ""
  echo "Usage: ./docker-dev.sh [command]"
  echo ""
  echo "Commands:"
  echo "  start       - Start all services"
  echo "  stop        - Stop all services"
  echo "  restart     - Restart all services"
  echo "  logs        - Show logs for all services"
  echo "  logs [service] - Show logs for a specific service (api, web, mongodb, redis)"
  echo "  status      - Show status of all services"
  echo "  clean       - Remove all containers and volumes (WARNING: This will delete all data)"
  echo "  rebuild     - Rebuild and restart services"
  echo "  shell [service] - Open a shell in a running container"
  echo "  help        - Show this help message"
  echo ""
}

# Check if Docker is running
check_docker() {
  if ! docker info > /dev/null 2>&1; then
    echo -e "${RED}Error: Docker is not running. Please start Docker Desktop or Docker service.${NC}"
    exit 1
  fi
}

# Start all services
start_services() {
  echo -e "${GREEN}Starting Samudra ERP services...${NC}"
  docker-compose up -d
  echo -e "${GREEN}Services started. Access:${NC}"
  echo -e "  - Web: ${YELLOW}http://localhost:3000${NC}"
  echo -e "  - API: ${YELLOW}http://localhost:3001${NC}"
  echo -e "  - MongoDB: ${YELLOW}localhost:27017${NC}"
  echo -e "  - Redis: ${YELLOW}localhost:6379${NC}"
}

# Stop all services
stop_services() {
  echo -e "${GREEN}Stopping Samudra ERP services...${NC}"
  docker-compose down
  echo -e "${GREEN}Services stopped.${NC}"
}

# Restart all services
restart_services() {
  echo -e "${GREEN}Restarting Samudra ERP services...${NC}"
  docker-compose restart
  echo -e "${GREEN}Services restarted.${NC}"
}

# Show logs
show_logs() {
  if [ -z "$1" ]; then
    echo -e "${GREEN}Showing logs for all services...${NC}"
    docker-compose logs -f
  else
    echo -e "${GREEN}Showing logs for $1...${NC}"
    docker-compose logs -f "$1"
  fi
}

# Show status
show_status() {
  echo -e "${GREEN}Samudra ERP services status:${NC}"
  docker-compose ps
}

# Clean all containers and volumes
clean_services() {
  echo -e "${RED}WARNING: This will remove all containers and volumes, including all data.${NC}"
  read -p "Are you sure you want to continue? (y/n) " -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}Removing all containers and volumes...${NC}"
    docker-compose down -v
    echo -e "${GREEN}Cleanup complete.${NC}"
  else
    echo -e "${GREEN}Operation cancelled.${NC}"
  fi
}

# Rebuild services
rebuild_services() {
  echo -e "${GREEN}Rebuilding Samudra ERP services...${NC}"
  docker-compose build --no-cache
  docker-compose up -d
  echo -e "${GREEN}Services rebuilt and started.${NC}"
}

# Open shell in container
open_shell() {
  if [ -z "$1" ]; then
    echo -e "${RED}Error: Please specify a service (api, web, mongodb, redis)${NC}"
    exit 1
  fi
  
  echo -e "${GREEN}Opening shell in $1 container...${NC}"
  if [ "$1" = "mongodb" ]; then
    docker-compose exec "$1" mongosh
  elif [ "$1" = "redis" ]; then
    docker-compose exec "$1" redis-cli
  else
    docker-compose exec "$1" sh
  fi
}

# Main script execution
check_docker

case "$1" in
  start)
    start_services
    ;;
  stop)
    stop_services
    ;;
  restart)
    restart_services
    ;;
  logs)
    show_logs "$2"
    ;;
  status)
    show_status
    ;;
  clean)
    clean_services
    ;;
  rebuild)
    rebuild_services
    ;;
  shell)
    open_shell "$2"
    ;;
  help|*)
    show_help
    ;;
esac

exit 0

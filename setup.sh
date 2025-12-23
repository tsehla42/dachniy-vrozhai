#!/bin/bash

# Dachniy Vrozhai - Automated Setup Script
# This script clones the repository and sets up all dependencies

set -e  # Exit on error

echo "🌱 Dachniy Vrozhai - Automated Setup"
echo "===================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print colored output
print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

print_success "Node.js found: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

print_success "npm found: $(npm --version)"

# Check if git is installed
if ! command -v git &> /dev/null; then
    print_error "Git is not installed. Please install Git first."
    exit 1
fi

print_success "Git found: $(git --version)"

echo ""
print_info "Installing main project dependencies..."
npm install

if [ $? -eq 0 ]; then
    print_success "Main project dependencies installed"
else
    print_error "Failed to install main dependencies"
    exit 1
fi

echo ""
print_info "Initializing git submodules..."
git submodule update --init --recursive

if [ $? -eq 0 ]; then
    print_success "Submodules initialized"
else
    print_error "Failed to initialize submodules"
    exit 1
fi

echo ""
print_info "Installing generator dependencies..."
cd generator
npm install
cd ..

if [ $? -eq 0 ]; then
    print_success "Generator dependencies installed"
else
    print_error "Failed to install generator dependencies"
    exit 1
fi

echo ""
print_info "Creating symlink for generator public folder..."
cd generator
rm -rf public
ln -sf ../public public
cd ..

if [ $? -eq 0 ]; then
    print_success "Symlink created"
else
    print_warning "Symlink creation failed (not critical)"
fi

echo ""
print_info "Generating initial content..."
npm run generate-content

if [ $? -eq 0 ]; then
    print_success "Content generated"
else
    print_warning "Content generation failed (you can run 'npm run generate-content' later)"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Available commands:"
echo "  ${GREEN}npm run dev${NC}              - Start development server"
echo "  ${GREEN}npm run generate${NC}         - Generate static site"
echo "  ${GREEN}npm run generate-content${NC} - Regenerate content from templates"
echo "  ${GREEN}npm run serve${NC}            - Serve generated static site"
echo ""
echo "To start development:"
echo "  ${BLUE}npm run dev${NC}"
echo ""


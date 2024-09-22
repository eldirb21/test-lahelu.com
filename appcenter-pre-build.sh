#!/bin/bash

echo "Setting up Java 11 for the build..."

# Set JAVA_HOME to the correct path for Java 11
export JAVA_HOME=$(/usr/libexec/java_home -v 11)
export PATH=$JAVA_HOME/bin:$PATH

# Verify that Java 11 is being used
java -version


# Install NVM (Node Version Manager) if it's not installed
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" || {
    echo "Installing NVM..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    source "$NVM_DIR/nvm.sh"
}

# Install Node.js version 18 and use it
nvm install 18
nvm use 18
echo "Using Node.js version $(node -v)"

# # Install Yarn globally, specifying the version
# npm install -g yarn@3.6.4
# echo "Yarn installed globally, version $(yarn -v)"

# Example: Change bundle name of an iOS app for non-production
if [ "$APPCENTER_BRANCH" != "main" ]; then
    plutil -replace CFBundleDisplayName -string "\$(PRODUCT_NAME) Production" "$APPCENTER_SOURCE_DIRECTORY/TestLahelu/Info.plist"
    echo "CFBundleDisplayName updated for branch: $APPCENTER_BRANCH"
fi
 
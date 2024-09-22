# # #!/bin/bash

# # Set JAVA_HOME to the correct path
# export JAVA_HOME=$(/usr/libexec/java_home -v 17)
# echo "JAVA_HOME set to $JAVA_HOME"

# # Install NVM
# export NVM_DIR="$HOME/.nvm"
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
# nvm install 18
# nvm use 18

# # Install Yarn
# npm install -g yarn@3.6.4

#!/usr/bin/env bash

# Example: Change bundle name of an iOS app for non-production
if [ "$APPCENTER_BRANCH" != "main" ];
then
    plutil -replace CFBundleDisplayName -string "\$(PRODUCT_NAME) Production" $APPCENTER_SOURCE_DIRECTORY/TestLahelu/Info.plist
fi
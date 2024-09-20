# #!/bin/bash

# # Atur versi Node.js
# nvm install 18 # Ganti dengan versi yang kamu butuhkan
# nvm use 18

# # Install Yarn jika diperlukan
# npm install -g yarn@3.6.4

#!/bin/bash

# Set JAVA_HOME to the correct path
export JAVA_HOME=$(/usr/libexec/java_home -v 17)  # Adjust version as needed
echo "JAVA_HOME set to $JAVA_HOME"

# Install NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install 18
nvm use 18

# Install Yarn
npm install -g yarn@1.22.22
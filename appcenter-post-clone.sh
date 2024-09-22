#!/bin/bash

# Set JAVA_HOME to the correct path for Java 11
export JAVA_HOME=$(/usr/libexec/java_home -v 11)
export PATH=$JAVA_HOME/bin:$PATH

# Verify Java version
echo "Using Java version: $(java -version)"

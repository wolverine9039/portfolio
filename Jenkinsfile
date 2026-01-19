pipeline {
    agent any
    
    // Define environment variables
    environment {
        NODE_VERSION = '18'
        PROJECT_NAME = '3d-portfolio'
        BUILD_DIR = 'dist'
        DOCKER_IMAGE = '3d-portfolio'
        DOCKER_TAG = "${BUILD_NUMBER}"
        DOCKER_REGISTRY = '' // e.g., 'docker.io/username' or 'your-registry.com'
        CONTAINER_NAME = 'portfolio-app'
        CONTAINER_PORT = '8080'
    }
    
    // Configure build triggers (optional)
    triggers {
        // Poll SCM every 5 minutes (adjust as needed)
        pollSCM('H/5 * * * *')
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo '📥 Checking out source code...'
                checkout scm
            }
        }
        
        stage('Setup Node.js') {
            steps {
                echo '🔧 Setting up Node.js environment...'
                script {
                    // Use NodeJS plugin if installed
                    // Make sure to install "NodeJS Plugin" in Jenkins
                    // and configure Node.js installation in Jenkins Global Tool Configuration
                    nodejs(nodeJSInstallationName: "NodeJS ${NODE_VERSION}") {
                        sh 'node --version'
                        sh 'npm --version'
                    }
                }
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo '📦 Installing npm dependencies...'
                script {
                    nodejs(nodeJSInstallationName: "NodeJS ${NODE_VERSION}") {
                        // Clean install to ensure consistency
                        sh 'npm ci'
                    }
                }
            }
        }
        
        stage('Lint') {
            steps {
                echo '🔍 Running ESLint...'
                script {
                    nodejs(nodeJSInstallationName: "NodeJS ${NODE_VERSION}") {
                        // Run linting (continue even if there are warnings)
                        sh 'npm run lint || true'
                    }
                }
            }
        }
        
        stage('Build') {
            steps {
                echo '🏗️  Building production bundle...'
                script {
                    nodejs(nodeJSInstallationName: "NodeJS ${NODE_VERSION}") {
                        sh 'npm run build'
                    }
                }
            }
        }
        
        stage('Test Build') {
            steps {
                echo '✅ Verifying build output...'
                script {
                    // Check if build directory exists and contains files
                    sh """
                        if [ -d "${BUILD_DIR}" ]; then
                            echo "✓ Build directory exists"
                            ls -la ${BUILD_DIR}
                            echo "✓ Build successful!"
                        else
                            echo "✗ Build directory not found!"
                            exit 1
                        fi
                    """
                }
            }
        }
        
        stage('Archive Artifacts') {
            steps {
                echo '📦 Archiving build artifacts...'
                archiveArtifacts artifacts: "${BUILD_DIR}/**/*", 
                                 fingerprint: true,
                                 allowEmptyArchive: false
            }
        }
        
        stage('Build Docker Image') {
            steps {
                echo '🐳 Building Docker image...'
                script {
                    // Build Docker image with build number tag and latest tag
                    sh """
                        docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .
                        docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest
                    """
                }
            }
        }
        
        stage('Test Docker Image') {
            steps {
                echo '🔬 Testing Docker image...'
                script {
                    // Verify image was created
                    sh "docker images | grep ${DOCKER_IMAGE}"
                    
                    // Optional: Run a quick test container
                    sh """
                        docker run --rm ${DOCKER_IMAGE}:${DOCKER_TAG} nginx -t
                        echo "✓ Docker image health check passed"
                    """
                }
            }
        }
        
        stage('Push to Registry') {
            when {
                anyOf {
                    branch 'main'
                    branch 'master'
                }
            }
            steps {
                echo '📤 Pushing Docker image to registry...'
                script {
                    // Only push if DOCKER_REGISTRY is configured
                    if (env.DOCKER_REGISTRY) {
                        // Login to Docker registry (requires credentials configured in Jenkins)
                        withCredentials([usernamePassword(
                            credentialsId: 'docker-registry-credentials',
                            usernameVariable: 'DOCKER_USER',
                            passwordVariable: 'DOCKER_PASS'
                        )]) {
                            sh """
                                echo \$DOCKER_PASS | docker login -u \$DOCKER_USER --password-stdin ${DOCKER_REGISTRY}
                                docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG}
                                docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:latest
                                docker push ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG}
                                docker push ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:latest
                            """
                        }
                    } else {
                        echo '⚠️  DOCKER_REGISTRY not configured, skipping push'
                    }
                }
            }
        }
        
        stage('Deploy with Docker') {
            when {
                anyOf {
                    branch 'main'
                    branch 'master'
                }
            }
            steps {
                echo '🚀 Deploying with Docker...'
                script {
                    // Stop and remove existing container if it exists
                    sh """
                        docker stop ${CONTAINER_NAME} || true
                        docker rm ${CONTAINER_NAME} || true
                    """
                    
                    // Run new container
                    sh """
                        docker run -d \
                            --name ${CONTAINER_NAME} \
                            -p ${CONTAINER_PORT}:80 \
                            --restart unless-stopped \
                            ${DOCKER_IMAGE}:${DOCKER_TAG}
                    """
                    
                    // Verify container is running
                    sh "docker ps | grep ${CONTAINER_NAME}"
                    echo "✅ Container deployed successfully on port ${CONTAINER_PORT}"
                    
                    // Alternative: Deploy using docker-compose
                    // sh 'docker-compose down'
                    // sh 'docker-compose up -d'
                }
            }
        }
        
        stage('Traditional Deploy (Optional)') {
            when {
                // Enable if you want both Docker and traditional deployment
                expression { return false }
            }
            steps {
                echo '🚀 Traditional deployment...'
                script {
                    // Option 1: Deploy to a web server via SCP
                    // sh 'scp -r dist/* user@server:/var/www/html/'
                    
                    // Option 2: Deploy to AWS S3
                    // sh 'aws s3 sync dist/ s3://your-bucket-name/ --delete'
                    
                    // Option 3: Deploy to Vercel
                    // sh 'npx vercel --prod --token=$VERCEL_TOKEN'
                    
                    // Option 4: Deploy to Netlify
                    // sh 'npx netlify-cli deploy --prod --dir=dist'
                    
                    echo '⚠️  Traditional deployment disabled (using Docker deployment)'
                }
            }
        }
    }
    
    post {
        success {
            echo '✅ Pipeline completed successfully!'
            script {
                // Display deployment info
                echo """
                    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    ✨ Deployment Summary
                    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    📦 Build Number: ${BUILD_NUMBER}
                    🐳 Docker Image: ${DOCKER_IMAGE}:${DOCKER_TAG}
                    🌐 Application URL: http://localhost:${CONTAINER_PORT}
                    📅 Timestamp: ${new Date()}
                    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                """
            }
            // Optional: Send success notification
            // emailext subject: "✅ Build Success: ${PROJECT_NAME} #${BUILD_NUMBER}",
            //          body: "The build completed successfully. Access at: http://localhost:${CONTAINER_PORT}",
            //          to: "your-email@example.com"
        }
        
        failure {
            echo '❌ Pipeline failed!'
            // Optional: Send failure notification
            // emailext subject: "❌ Build Failed: ${PROJECT_NAME} #${BUILD_NUMBER}",
            //          body: "The build has failed. Please check Jenkins for details.",
            //          to: "your-email@example.com"
        }
        
        always {
            echo '🧹 Cleaning up...'
            script {
                // Clean up old Docker images (keep last 5 builds)
                sh """
                    docker images ${DOCKER_IMAGE} --format '{{.Tag}}' | \
                    grep -E '^[0-9]+\$' | \
                    sort -rn | \
                    tail -n +6 | \
                    xargs -r -I {} docker rmi ${DOCKER_IMAGE}:{} || true
                """
            }
            // Optional: Clean up workspace
            // cleanWs()
        }
    }
}

cp /home/coder/project/workspace/nodejest/setupTests.js /home/coder/project/workspace/nodeapp/setupTests.js;
rm -f /home/coder/project/workspace/nodeapp/test/*;
cp /home/coder/project/workspace/nodejest/tests/* /home/coder/project/workspace/nodeapp/test;
cd /home/coder/project/workspace/nodeapp;
source /usr/local/nvm/nvm.sh
nvm use 14
export CI=true;
fuser -k -n tcp 8080
npm test --verbose --testPathPattern=tests 2>&1;

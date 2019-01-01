#! /bin/bash
# These are files need to be copied
toCopy=(config src package.json package-lock.json)

# 1. build clients files
echo "#1 [CLIENT SIDE] Build React files"
npm run build --prefix ../client/

# 2. copy clients
echo "#2 [CLIENT SIDE] Copy build results"
rm -rf public && mv ../client/build ./public

# 3. remove existing files in ../docker/
echo "#3 [SERVER SIDE] remove old files"
for f in "${toCopy[@]}"
do
  rm -rf "./$f"
done

# 4. copy all files to ./docker/ folder
echo "#4 [SERVER SIDE] copy all files"

for f in "${toCopy[@]}"
do
  cp -R "../server/$f" "./"
done

echo "#5 All finished, ready to dockerize"
.PHONY=all clean

vue: .
	npm run build

docker: Dockerfile dist
	docker build . -t timer:latest
	docker save timer | gzip > timer.tar.gz

clean: 
	rm -rf dist timer.tar.gz

all: vue docker
	

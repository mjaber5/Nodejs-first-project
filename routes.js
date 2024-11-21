const requestHandler =(req,res)=>{
    const url = req.url;
    
    if (url == '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Nodejs Assignment</title></head>')
        res.write('<body><form action="/create-user" method="post"><input type="text" name="username"> <button type="submit">save</button></form></body>')
        res.write('</html>')
        return res.end();
    }
    if (url == '/users'){
        res.setHeader('Content-Type','text/html');
            res.write('<html>')
            res.write('<head><title>Nodejs Assignment</title></head>')
            res.write('<body><ul><li>user1</li><li>user2</li></ul></body>')
            res.write('</html>')
            res.end();
    }
    if (url == '/create-user'){
        const body =[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        req.on('end',()=>{
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location','/');
        res.end();
    }
};

module.exports = {
    handler : requestHandler,
}
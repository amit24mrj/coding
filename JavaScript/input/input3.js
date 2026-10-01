process.stdout.write('Enter your name:\n');
process.stdin.setEncoding('utf-8');
process.stdin.on('data',(data)=>{
    const name=data.trim();
    console.log(`Hello, ${name}!`);
    process.exit();
})
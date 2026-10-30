async function testDjangoAPI() {
    try {
    await fetch(`http://127.0.0.1:8000/api/register/`, {
        method: "POST",
        
    });

    } catch (error: any) {
        console.error(error)
    }
}


export type Post = {
    imageUrl: string,
    description: string,
    likes: string[],
    userName: string,
    createdAt: string,
}

function savePost() {
    // // img
    // const imageUpload = document.getElementById('imageUpload');
    // const uploadedImage = document.getElementById('uploadedImage');

    // imageUpload.addEventListener('change', function(event) {
    //     const file = event.target.files[0]; // קבלת הקובץ הנבחר
    //     if (file) {
    //         const reader = new FileReader(); // יצירת אובייקט לקריאת הקובץ
    //         reader.onload = function(e) {
    //             uploadedImage.src = e.target.result; // הגדרת ה-src של ה-img להיות הכתובת (data URL) של התמונה
    //             uploadedImage.style.display = 'block'; // הצגת אלמנט ה-img
    //         }
    //         reader.readAsDataURL(file); // קריאת הקובץ כ-data URL
}
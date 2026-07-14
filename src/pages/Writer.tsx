export default function Writer() {
  return (
    <div className="writer-page">
      <h1>✍️ الكاتب الذكي</h1>
      <p>أنشئ محتوى احترافي خلال ثوانٍ.</p>

      <div className="writer-box">
        <textarea
          placeholder="اكتب فكرتك هنا... مثال: اكتب تغريدة عن أهمية التعليم."
          rows={10}
        />

        <div className="buttons">
          <button>✍️ كتابة</button>
          <button>♻️ إعادة صياغة</button>
          <button>🏷️ هاشتاقات</button>
          <button>📋 نسخ</button>
        </div>
      </div>
    </div>
  );
}
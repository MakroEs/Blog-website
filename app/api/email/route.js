import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import EmailModel from "@/lib/models/EmailModel";

// Veritabanı bağlantısını başlat
const LoadDB = async () => {
  try {
    await ConnectDB();
  } catch (error) {
    console.error('Veritabanı bağlantı hatası:', error);
  }
};

// Bağlantıyı uygulama başlatılırken yapın
LoadDB();

export async function POST(request) {
  try {
    // FormData içeriğini al
    const formData = await request.formData();
    const email = formData.get('email');

    // Email'in var olup olmadığını kontrol et
    if (!email) {
      return NextResponse.json({ success: false, msg: "Email adresi sağlanmadı." }, { status: 400 });
    }

    // EmailModel'e veri ekleme
    await EmailModel.create({ email: `${email}` });

    // Başarılı yanıt
    return NextResponse.json({ success: true, msg: "Email başarıyla abone edildi." });
  } catch (error) {
    console.error('POST isteği hatası:', error); // Hata loglama
    return NextResponse.json({ success: false, msg: "Sunucu hatası oluştu." }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    // EmailModel'den verileri al
    const emails = await EmailModel.find({});
    return NextResponse.json({ success: true, emails });
  } catch (error) {
    console.error('GET isteği hatası:', error); // Hata loglama
    return NextResponse.json({ success: false, msg: "Sunucu hatası oluştu." }, { status: 500 });
  }
}

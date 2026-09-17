# متجرك — Arabic E-commerce Starter

نسخة Full-Stack أولية مستوحاة من التصميمات التي طلبتها: RTL، أسود/برتقالي نيون، صفحات المتجر، الأقسام، العروض، من نحن، تواصل معنا، المصادقة، ولوحة الحساب.

## التقنية
- Next.js 15 + React + TypeScript
- Prisma ORM
- SQLite للتشغيل المحلي السريع (يمكن نقل DATABASE_URL إلى PostgreSQL)
- API Routes داخل Next.js
- Zod للتحقق من بيانات نموذج التواصل والتسجيل
- bcryptjs لتشفير كلمات المرور

## التشغيل
```bash
cp .env.example .env
npm install
npm run db:push
npm run db:seed
npm run dev
```
ثم افتح `http://localhost:3000`.

## حساب تجريبي
- البريد: `ahmed@example.com`
- كلمة المرور: `12345678`

## الصفحات
- `/` الرئيسية
- `/products` المنتجات
- `/categories` الأقسام
- `/offers` العروض والتخفيضات
- `/about` من نحن
- `/contact` تواصل معنا
- `/auth` تسجيل الدخول / إنشاء حساب
- `/account` لوحة التحكم
- `/account/purchases` المشتريات
- `/account/wishlist` قائمة الأمنيات
- `/account/addresses` العناوين
- `/account/profile` معلومات الحساب
- `/account/settings` الإعدادات

## قاعدة البيانات
المخطط موجود في `prisma/schema.prisma` ويشمل Users, Categories, Products, Wishlist, Addresses, Orders, OrderItems وContactMessage.

> ملاحظة: هذه نسخة بداية قابلة للتطوير؛ الدفع الإلكتروني الحقيقي، جلسات JWT/NextAuth، رفع الصور، إدارة المخزون، لوحة Admin وصلاحياتها، والشحن يمكن إضافتها قبل الإطلاق التجاري.

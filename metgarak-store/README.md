# متجرك — Arabic E-commerce Starter

نسخة Full-Stack أولية مستوحاة من التصميمات التي طلبتها: RTL، أسود/برتقالي نيون، صفحات المتجر، الأقسام، العروض، من نحن، تواصل معنا، المصادقة، ولوحة الحساب.

## التقنية
- Next.js 15 + React + TypeScript
- Prisma ORM
- PostgreSQL (مناسب للإنتاج وVercel)
- API Routes داخل Next.js
- Zod للتحقق من بيانات نموذج التواصل والتسجيل
- bcryptjs لتشفير كلمات المرور

## التشغيل
```bash
cp .env.postgres.example .env
npm install
npm run db:deploy
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


## النشر على Vercel
1. أنشئ قاعدة PostgreSQL (مثل Neon أو مزود PostgreSQL آخر).
2. ضع `DATABASE_URL و DIRECT_URL` في Vercel ضمن Environment Variables.
3. نفّذ `npm run db:deploy` مرة واحدة على قاعدة الإنتاج لإنشاء الجداول، ثم نفّذ `npm run db:seed` إذا أردت البيانات التجريبية.
4. بعد ذلك أعد Deploy في Vercel.

> مهم: لا تضع أي بيانات اتصال حقيقية بقاعدة Neon داخل GitHub. ملفات `.env` محلية فقط، وبيانات الإنتاج تُضاف من Vercel Environment Variables.


## إعداد قاعدة بيانات Neon

المشروع مجهز للعمل مع **Neon PostgreSQL**.

1. أنشئ مشروعًا جديدًا في Neon.
2. من صفحة **Connect** انسخ رابط الاتصال الـ **pooled** وضعه في `DATABASE_URL`.
3. انسخ رابط الاتصال **direct/unpooled** وضعه في `DIRECT_URL`.
4. محليًا شغّل:

```bash
npm install
npm run db:deploy
npm run db:seed
npm run dev
```

5. في Vercel افتح **Settings → Environment Variables** وأضف `DATABASE_URL` و `DIRECT_URL` لكل بيئة تريدها (Production / Preview / Development).
6. اعمل Redeploy.

> لا ترفع ملف `.env` إلى GitHub. استخدم `.env.example` كقالب فقط.

### ملاحظة Vercel + Neon
`DATABASE_URL` مخصص لتشغيل التطبيق عبر اتصال Neon pooled، بينما `DIRECT_URL` مخصص لأوامر Prisma مثل `db push`. هذا يجعل المشروع مناسبًا لبيئة Vercel + Neon.

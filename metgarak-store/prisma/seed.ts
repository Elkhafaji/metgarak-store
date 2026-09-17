import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient();
async function main(){
  await prisma.orderItem.deleteMany(); await prisma.order.deleteMany(); await prisma.wishlist.deleteMany(); await prisma.address.deleteMany(); await prisma.product.deleteMany(); await prisma.category.deleteMany(); await prisma.user.deleteMany();
  const cats = [
    ['الهواتف الذكية','phones','أحدث الهواتف من أشهر العلامات'],['الكمبيوتر واللابتوبات','laptops','أجهزة العمل والألعاب'],['الإكسسوارات','accessories','إكسسوارات تكمل تجربتك'],['أجهزة الألعاب','gaming','كل ما تحتاجه للعب'],['الشاشات والتلفزيونات','screens','صورة غامرة وأداء مميز'],['الأجهزة المنزلية الذكية','smart-home','اجعل منزلك أكثر ذكاءً'],['الملحقات المكتبية','office','مستلزمات مكتبك وإنتاجيتك'],['السماعات والصوتيات','audio','صوت نقي وتجربة غامرة']
  ];
  const categoryMap:any={}; for(const [name,slug,description] of cats){categoryMap[slug]=await prisma.category.create({data:{name,slug,description}})}
  const products=[
    ['آيفون 15 برو ماكس','iphone-15-pro-max',48999,56999,'phones','256 جيجابايت · تيتانيوم أسود','/products/iphone.svg','الأكثر مبيعاً'],
    ['Samsung Galaxy S24','galaxy-s24',39999,45999,'phones','256 جيجابايت · 5G','/products/phone.svg','خصم 12%'],
    ['MacBook Air M2','macbook-air-m2',43199,47999,'laptops','8GB RAM · 256GB SSD','/products/laptop.svg','خصم 10%'],
    ['ASUS ROG Strix G16','asus-rog-g16',38499,44999,'laptops','Core i7 · 16GB · RTX 4060','/products/laptop.svg','خصم 15%'],
    ['HP Pavilion 15','hp-pavilion-15',22999,26999,'laptops','Core i5 · 8GB · 512GB SSD','/products/laptop.svg','الأكثر مبيعاً'],
    ['AirPods Pro 2','airpods-pro-2',12499,14999,'audio','الجيل الثاني · علبة شحن لاسلكية','/products/airpods.svg','جديد'],
    ['ساعة Apple Watch Series 9','apple-watch-9',18599,22999,'accessories','GPS · 45mm','/products/watch.svg','خصم 18%'],
    ['PlayStation 5','playstation-5',24999,29999,'gaming','نسخة رقمية · ضمان سنتين','/products/console.svg','خصم 22%'],
    ['Samsung TV 55 QLED','samsung-tv-55',24999,29999,'screens','55 بوصة · 4K · Smart TV','/products/tv.svg','خصم 17%'],
    ['كرسي ألعاب احترافي','gaming-chair',5599,7999,'gaming','مريح وقابل للتعديل','/products/chair.svg','خصم 30%'],
    ['JBL Tune 230NC','jbl-tune-230nc',4999,5999,'audio','إلغاء الضوضاء · Bluetooth','/products/airpods.svg','خصم 16%'],
    ['Logitech G502','logitech-g502',4499,5499,'accessories','ماوس ألعاب RGB','/products/mouse.svg','خصم 10%']
  ];
  for(const [name,slug,price,oldPrice,cat,description,image,badge] of products){await prisma.product.create({data:{name,slug,price,oldPrice,description,stock:25,rating:4.8,reviews:Math.floor(Math.random()*100)+20,image,badge,categoryId:categoryMap[cat].id}})}
  const password=await bcrypt.hash('12345678',10); const user=await prisma.user.create({data:{name:'أحمد محمد',email:'ahmed@example.com',phone:'+20 155 555 0123',password}});
  await prisma.address.create({data:{userId:user.id,label:'المنزل',city:'القاهرة',street:'التجمع الخامس، القاهرة',phone:'+20 123 456 7890',isDefault:true}});
  const ps=await prisma.product.findMany({take:4});
  await prisma.wishlist.createMany({data:ps.slice(0,3).map(p=>({userId:user.id,productId:p.id}))});
  const orders=[['MK-45872','DELIVERED',1650],['MK-45721','PROCESSING',24999],['MK-45610','SHIPPED',8750],['MK-44105','CANCELLED',32999]] as const;
  for(const [number,status,total] of orders){const o=await prisma.order.create({data:{number,status,total,userId:user.id}}); await prisma.orderItem.create({data:{orderId:o.id,productId:ps[0].id,quantity:1,price:total}})}
}
main().finally(()=>prisma.$disconnect());

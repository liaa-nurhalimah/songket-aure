import React, { useState } from 'react';
import { Mail, MessageCircle, Instagram, MapPin, Phone, ShoppingBag, Sparkles } from "lucide-react";

export default function SongketAureContact() {
  const [activeTab, setActiveTab] = useState('whatsapp');

  const contactTabs = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: MessageCircle,
      title: 'Chat dengan Kami',
      description: 'Konsultasi dan pemesanan langsung:',
      contact: '+62 821-1234-5678',
      href: 'https://wa.me/6282112345678',
      color: 'green'
    },
    {
      id: 'instagram',
      label: 'Instagram',
      icon: Instagram,
      title: 'Follow Instagram Kami',
      description: 'Lihat koleksi songket terbaru:',
      contact: '@songketaure',
      href: 'https://www.instagram.com/songketaure',
      color: 'pink'
    },
    {
      id: 'email',
      label: 'Email',
      icon: Mail,
      title: 'Kirim Email',
      description: 'Untuk pertanyaan dan kerjasama:',
      contact: 'info@songketaure.com',
      href: 'mailto:info@songketaure.com',
      color: 'blue'
    },
    {
      id: 'maps',
      label: 'Lokasi',
      icon: MapPin,
      title: 'Kunjungi Toko Kami',
      description: 'Alamat showroom:',
      contact: 'Jl. Sungai Sahang Palembang',
      href: 'https://maps.app.goo.gl/CNzF9iRyf1xyoPsY8',
      color: 'red'
    }
  ];

  const getColorClasses = (color, active = false) => {
    const colors = {
      green: active 
        ? 'bg-green-500 text-white border-green-500' 
        : 'text-green-600 hover:text-green-700 hover:bg-green-50',
      pink: active 
        ? 'bg-pink-500 text-white border-pink-500' 
        : 'text-pink-600 hover:text-pink-700 hover:bg-pink-50',
      blue: active 
        ? 'bg-blue-500 text-white border-blue-500' 
        : 'text-blue-600 hover:text-blue-700 hover:bg-blue-50',
      red: active 
        ? 'bg-red-500 text-white border-red-500' 
        : 'text-red-600 hover:text-red-700 hover:bg-red-50'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="hubungi"
     className="relative py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-red-400 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full font-medium text-sm">
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  Hubungi Kami
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Tertarik dengan
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                  Aure Songket?
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Hubungi kami untuk konsultasi, pemesanan custom, atau kunjungi showroom kami untuk melihat langsung keindahan songket tradisional Palembang.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Pesan Sekarang
              </button>
              <button className="group border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Konsultasi
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-white p-4 rounded-2xl shadow-lg mb-3">
                  <Sparkles className="w-8 h-8 text-amber-600 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-900">Kualitas Premium</h3>
                <p className="text-sm text-gray-600">Songket berkualitas tinggi</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-2xl shadow-lg mb-3">
                  <ShoppingBag className="w-8 h-8 text-orange-600 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-900">Custom Design</h3>
                <p className="text-sm text-gray-600">Sesuai keinginan Anda</p>
              </div>
              <div className="text-center sm:col-span-1 col-span-2">
                <div className="bg-white p-4 rounded-2xl shadow-lg mb-3">
                  <Phone className="w-8 h-8 text-red-600 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-900">Layanan Terbaik</h3>
                <p className="text-sm text-gray-600">Konsultasi gratis</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Tabs */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
            {/* Tab Navigation */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {contactTabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`p-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${getColorClasses(tab.color, activeTab === tab.id)}`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="min-h-48">
              {contactTabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <div
                    key={tab.id}
                    className={`space-y-6 ${activeTab === tab.id ? 'block' : 'hidden'}`}
                  >
                    <div className="text-center">
                      <div className={`inline-flex p-4 rounded-2xl mb-4 ${
                        tab.color === 'green' ? 'bg-green-100' :
                        tab.color === 'pink' ? 'bg-pink-100' :
                        tab.color === 'blue' ? 'bg-blue-100' :
                        'bg-red-100'
                      }`}>
                        <IconComponent className={`w-8 h-8 ${
                          tab.color === 'green' ? 'text-green-600' :
                          tab.color === 'pink' ? 'text-pink-600' :
                          tab.color === 'blue' ? 'text-blue-600' :
                          'text-red-600'
                        }`} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {tab.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {tab.description}
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="text-center">
                        <p className="text-lg font-semibold text-gray-900 mb-4">
                          {tab.contact}
                        </p>
                        <a
                          href={tab.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                            tab.color === 'green' ? 'bg-green-500 hover:bg-green-600 text-white' :
                            tab.color === 'pink' ? 'bg-pink-500 hover:bg-pink-600 text-white' :
                            tab.color === 'blue' ? 'bg-blue-500 hover:bg-blue-600 text-white' :
                            'bg-red-500 hover:bg-red-600 text-white'
                          }`}
                        >
                          <IconComponent className="w-5 h-5" />
                          {tab.id === 'whatsapp' ? 'Chat Sekarang' :
                           tab.id === 'instagram' ? 'Follow Kami' :
                           tab.id === 'email' ? 'Kirim Email' :
                           'Lihat Lokasi'}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-4 border border-amber-200">
                      <div className="flex items-center gap-3">
                        <Sparkles className="w-5 h-5 text-amber-600" />
                        <div>
                          <p className="text-sm font-medium text-amber-800">
                            {tab.id === 'whatsapp' ? 'Respon cepat dalam 5 menit' :
                             tab.id === 'instagram' ? 'Update koleksi terbaru setiap hari' :
                             tab.id === 'email' ? 'Balasan dalam 24 jam' :
                             'Buka Senin-Sabtu 09:00-17:00'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section - Why Choose Us */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Mengapa Memilih Songket Aure?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Tradisi Otentik</h4>
              <p className="text-gray-600 text-sm">Songket asli Palembang dengan motif tradisional yang diwariskan turun-temurun</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Pengrajin Berpengalaman</h4>
              <p className="text-gray-600 text-sm">Dikerjakan oleh pengrajin songket berpengalaman puluhan tahun</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Layanan Prima</h4>
              <p className="text-gray-600 text-sm">Konsultasi gratis, custom design, dan garansi kualitas terbaik</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

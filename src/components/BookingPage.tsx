import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarDaysIcon, UserIcon, MailIcon, PhoneIcon, UsersIcon, ArrowLeftIcon } from 'lucide-react';

export const BookingPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        package: '',
        date: '',
        numberOfGuests: '',
    
        specialRequests: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Booking submitted:', formData);
        // You can add navigation to a confirmation page here
    };

    const packages = [
        { value: 'explorer', label: 'The Kiddovents Explorer Pass (Kids – 25,000 RWF)', price: '25,000 RWF' },
        { value: 'togetherness', label: 'The Togetherness Pass (Parents & Young Adults – 17,000 RWF)', price: '17,000 RWF' },
        { value: 'family', label: 'Family Bond Package (2 Adults + 2 Kids – 80,000 RWF)', price: '80,000 RWF' },
        { value: 'group', label: 'Group Fun Package (Group of 4 Friends – 60,000 RWF)', price: '60,000 RWF' }
    ];

    

    return (
        <div className="w-full min-h-screen bg-white">
            <header className="w-full bg-gradient-to-b from-[#F4A5A5] to-[#FFFFFF] py-12">
                <div className="container mx-auto px-4">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center text-[#A855F7] hover:text-[#9333EA] transition-colors mb-6"
                    >
                        <ArrowLeftIcon className="w-5 h-5 mr-2" />
                        Back to Home
                    </button>
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="inline-flex items-center bg-gradient-to-r #E6AEAE rounded-full px-6 py-2 mb-6">
                            <CalendarDaysIcon className="w-5 h-5 text-[#A855F7] mr-2" />
                            <span className="text-[#6A0DAD] font-medium">
                                Book Your Experience
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#A855F7] mb-4">
                            Reserve Your Spot
                        </h1>
                        <p className="text-lg text-gray-700 max-w-lg mx-auto">
                            Fill out the form below to secure your tickets for an unforgettable day of togetherness
                        </p>
                    </div>
                </div>
            </header>

            <main className="w-full py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12">
                            {/* Personal Information */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-[#A855F7] mb-6 flex items-center">
                                    <UserIcon className="w-6 h-6 mr-2" />
                                    Personal Information
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A855F7] focus:border-transparent outline-none transition-all"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                                <MailIcon className="w-4 h-4 mr-1" />
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A855F7] focus:border-transparent outline-none transition-all"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                                <PhoneIcon className="w-4 h-4 mr-1" />
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                required
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A855F7] focus:border-transparent outline-none transition-all"
                                                placeholder="+250 XXX XXX XXX"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Package Selection */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-[#A855F7] mb-6 flex items-center">
                                    <UsersIcon className="w-6 h-6 mr-2" />
                                    Select Package *
                                </h2>
                                <div className="space-y-3">
                                    {packages.map((pkg) => (
                                        <label
                                            key={pkg.value}
                                            className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.package === pkg.value
                                                ? 'border-[#A855F7] bg-[#F4A5A5]/10'
                                                : 'border-gray-200 hover:border-[#A855F7]/50'
                                                }`}
                                        >
                                            <input
                                                type="radio"
                                                name="package"
                                                value={pkg.value}
                                                checked={formData.package === pkg.value}
                                                onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                                                className="mt-1 mr-3 w-4 h-4 text-[#A855F7] focus:ring-[#A855F7]"
                                                required
                                            />
                                            <div className="flex-1">
                                                <div className="font-semibold text-gray-800">{pkg.label}</div>
                                                <div className="text-sm text-[#A855F7] font-medium mt-1">{pkg.price}</div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>



                            {/* Special Requests */}
                            <div className="mb-8">
                                <label htmlFor="requests" className="block text-sm font-medium text-gray-700 mb-2">
                                    Special Requests or Notes
                                </label>
                                <textarea
                                    id="requests"
                                    rows={4}
                                    value={formData.specialRequests}
                                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A855F7] focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="Any special accommodations or requests..."
                                />
                            </div>

                            {/* Submit Button */}
                           <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://kiddovents.sinc.events/kiddovents-2208-edition-2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1"
                            >
                                <button
                                type="button"
                                className="w-full bg-[#A855F7] text-white font-medium py-4 px-8 rounded-full shadow-lg hover:bg-[#9333EA] transition-colors text-center"
                                >
                                Complete Booking
                                </button>
                            </a>
                            </div>

                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};


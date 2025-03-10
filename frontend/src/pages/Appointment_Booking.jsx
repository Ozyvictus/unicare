import React, { useState } from 'react';

// Custom styles for our theme colors
const themeStyles = {
    bgColor: "#f2f1ec",
    themeColor: "#365b6d"
};

const AppointmentBookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        consultationType: '',
        additionalNotes: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Appointment booked:', formData);
        alert('Appointment booked successfully!');
    };

    // Get today's date in YYYY-MM-DD format for min date in date picker
    const today = new Date().toISOString().split('T')[0];

    // Consultation types
    const consultationTypes = [
        'General Check-up',
        'Specialist Consultation',
        'Follow-up Visit',
        'Vaccination',
        'Prescription Renewal',
        'Laboratory Tests',
        'Other'
    ];

    return (
        <div className="min-h-screen p-4 md:p-8" style={{ backgroundColor: themeStyles.bgColor }}>
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
                <header className="flex items-center mb-6">
                    <span className="text-4xl mr-3">🩺</span>
                    <h1 className="text-3xl font-bold" style={{ color: themeStyles.themeColor }}>Book an Appointment</h1>
                </header>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                        {/* Personal Information Section */}
                        <div className="p-4 rounded-md" style={{
                            backgroundColor: themeStyles.bgColor,
                            borderLeftWidth: '4px',
                            borderLeftColor: themeStyles.themeColor
                        }}>
                            <h2 className="text-xl font-semibold mb-4" style={{ color: themeStyles.themeColor }}>Personal Information</h2>

                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block font-medium mb-1" style={{ color: themeStyles.themeColor }}>Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-2 rounded focus:outline-none"
                                        style={{
                                            borderWidth: '1px',
                                            borderColor: `${themeStyles.themeColor}50`,
                                        }}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block font-medium mb-1" style={{ color: themeStyles.themeColor }}>Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full p-2 rounded focus:outline-none"
                                        style={{
                                            borderWidth: '1px',
                                            borderColor: `${themeStyles.themeColor}50`,
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Appointment Details Section */}
                        <div className="p-4 rounded-md" style={{
                            backgroundColor: themeStyles.bgColor,
                            borderLeftWidth: '4px',
                            borderLeftColor: themeStyles.themeColor
                        }}>
                            <h2 className="text-xl font-semibold mb-4" style={{ color: themeStyles.themeColor }}>Appointment Details</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="date" className="block font-medium mb-1" style={{ color: themeStyles.themeColor }}>Date</label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        min={today}
                                        className="w-full p-2 rounded focus:outline-none"
                                        style={{
                                            borderWidth: '1px',
                                            borderColor: `${themeStyles.themeColor}50`,
                                        }}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="time" className="block font-medium mb-1" style={{ color: themeStyles.themeColor }}>Time</label>
                                    <input
                                        type="time"
                                        id="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        className="w-full p-2 rounded focus:outline-none"
                                        style={{
                                            borderWidth: '1px',
                                            borderColor: `${themeStyles.themeColor}50`,
                                        }}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="consultationType" className="block font-medium mb-1" style={{ color: themeStyles.themeColor }}>Type of Consultation</label>
                                <select
                                    id="consultationType"
                                    name="consultationType"
                                    value={formData.consultationType}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded focus:outline-none"
                                    style={{
                                        borderWidth: '1px',
                                        borderColor: `${themeStyles.themeColor}50`,
                                    }}
                                    required
                                >
                                    <option value="" disabled>Select consultation type</option>
                                    {consultationTypes.map((type, index) => (
                                        <option key={index} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="additionalNotes" className="block font-medium mb-1" style={{ color: themeStyles.themeColor }}>Additional Notes (Optional)</label>
                                <textarea
                                    id="additionalNotes"
                                    name="additionalNotes"
                                    value={formData.additionalNotes}
                                    onChange={handleChange}
                                    rows="3"
                                    placeholder="Please describe your symptoms or reason for visit"
                                    className="w-full p-2 rounded focus:outline-none"
                                    style={{
                                        borderWidth: '1px',
                                        borderColor: `${themeStyles.themeColor}50`,
                                    }}
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button
                            type="submit"
                            className="w-full py-3 px-4 rounded-lg font-medium hover:opacity-90 transition text-white"
                            style={{ backgroundColor: themeStyles.themeColor }}
                        >
                            Book Appointment
                        </button>
                    </div>
                </form>

                <footer className="mt-8 text-center text-sm" style={{ color: themeStyles.themeColor }}>
                    <p>Appointments can be rescheduled up to 24 hours before the scheduled time.</p>
                    <p className="mt-1">For urgent consultations, please call our emergency line: <span className="font-medium">1-800-MED-HELP</span></p>
                </footer>
            </div>
        </div>
    );
};

export default AppointmentBookingForm;

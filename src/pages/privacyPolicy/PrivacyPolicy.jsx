import React from 'react'

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>

            <p className="text-gray-600 mb-6">
                Property CallCenter("we" or "us") operates the app Property CallCenter (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
            <p className="text-gray-600 mb-8">
                We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
            </p>

            {/* Information Collection and Use */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information Collection and Use</h2>
            <p className="text-gray-600 mb-6">
                We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>

            {/* Types of Data Collected */}
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Types of Data Collected</h3>
            <p className="text-gray-600 mb-3">
                <strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1 pl-4">
                <li>Email address</li>
                <li>Full Name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Cookies and Usage Data</li>
            </ul>

            {/* Use of Data */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Use of Data</h2>
            <p className="text-gray-600 mb-3">We use the collected data for various purposes:</p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-1 pl-4">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
            </ul>

            {/* Disclosure of Data */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disclosure of Data</h2>
            <p className="text-gray-600 mb-3">
                We may disclose your Personal Data in the good faith belief that such action is necessary to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-1 pl-4">
                <li>Comply with a legal obligation</li>
                <li>Protect and defend the rights or property of Property CallCenter</li>
                <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>Protect the personal safety of users of the Service or the public</li>
                <li>Protect against legal liability</li>
            </ul>

            {/* Security of Data */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Security of Data</h2>
            <p className="text-gray-600 mb-8">
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>

            {/* Location Information */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Location Information</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Location Information</h3>
            <p className="text-gray-600 mb-6">
                Our application collects and uses location information to provide location-based property search services.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">What Location Data We Collect</h3>
            <p className="text-gray-600 mb-3">We may collect:</p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-1 pl-4">
                <li><strong>Precise Location</strong> (GPS-level accuracy) using ACCESS_FINE_LOCATION</li>
                <li><strong>Approximate Location</strong> (city/area level) using ACCESS_COARSE_LOCATION</li>
                <li><strong>Background Location</strong> (if enabled) when the app is not actively in use, to provide real-time property alerts and nearby property updates</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Why We Collect Location Data</h3>
            <p className="text-gray-600 mb-3">We collect location information to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1 pl-4">
                <li>Show nearby property listings based on your current location</li>
                <li>Calculate the distance between you and listed properties</li>
                <li>Display accurate property locations on map view</li>
                <li>Send notifications about newly listed properties near your area (if background location is enabled)</li>
            </ul>
            <p className="text-gray-600 mb-8">
                Location access helps us improve search accuracy and provide a better user experience.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3. When Location Data Is Collected</h3>
            <p className="text-gray-600 mb-3">Location data is collected:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1 pl-4">
                <li>When the user grants permission within the app</li>
                <li>When the app is in use (foreground location)</li>
                <li>In the background, only if the user has explicitly granted background location permission</li>
            </ul>
            <p className="text-gray-600 mb-8">
                Users can disable location access anytime from their device settings.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Data Sharing</h3>
            <p className="text-gray-600 mb-3">
                We do not sell, rent, or trade your location information to third parties.
            </p>
            <p className="text-gray-600 mb-3">Location data is used strictly for:</p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-1 pl-4">
                <li>Providing location-based property search services</li>
                <li>Improving user experience</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">5. Data Security</h3>
            <p className="text-gray-600 mb-8">
                We implement appropriate technical and organizational measures to protect your location information from unauthorized access, misuse, or disclosure.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">6. User Control</h3>
            <p className="text-gray-600 mb-3">You can:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1 pl-4">
                <li>Allow or deny location permission</li>
                <li>Revoke background location access</li>
                <li>Disable location access anytime through device settings</li>
            </ul>
            <p className="text-gray-600 mb-4">
                Disabling location may affect certain app features such as nearby property search.
            </p>
        </div>
    )
}

export default PrivacyPolicy

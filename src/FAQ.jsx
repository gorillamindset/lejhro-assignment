

function FAQ() {
  return (
    <section className="bg-[#1D1D1D] text-gray-100 py-32 text-2xl min-h-screen">
    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
        <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">Can I funds to my fixed Deposit?</summary>
            <div className="px-4 pb-4">
            <p>No, funds cannot be added at any time of the tenure once your FD is booked.</p>
            </div>
        </details>
        <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">What payment methods do you accept?</summary>
            <div className="px-4 pb-4">
            <p>We accept various payment methods, including credit cards, debit cards, net banking, and mobile wallet payments. You can choose the payment option that is most convenient for you during the checkout process.</p>
            </div>
        </details>
        <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">What is the maturity date?</summary>
            <div className="px-4 pb-4">
            <p>A maturity date is when all funds due are paid into your nominated account.</p>
            </div>
        </details>

        </div>
    </div>
    </section>
  )
}

export default FAQ;



import { NextRequest, NextResponse } from 'next/server';

const adminEmail = 'akhiammar7@gmail.com';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data, total, service } = body;

    if (type === 'admin') {
      // Send admin notification
      const adminMessage = `
        <h2>New Booking Request</h2>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Vehicles:</strong> ${data.vehicles}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Time:</strong> ${data.time}</p>
        <p><strong>Total:</strong> $${total}</p>
        <hr />
        <p><strong>Customer Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        <p><strong>Notes:</strong> ${data.notes || 'None'}</p>
      `;

      // Here you would integrate with an email service like SendGrid, Nodemailer, etc.
      // For now, we'll just log it
      console.log('Admin Email:', adminMessage);
    }

    if (type === 'customer') {
      // Send customer confirmation receipt
      const customerMessage = `
        <h2>Booking Confirmation - AKHI DETAILS</h2>
        <p>Thank you for booking with AKHI DETAILS!</p>
        <h3>Booking Details:</h3>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Vehicles:</strong> ${data.vehicles}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Time:</strong> ${data.time}</p>
        <p><strong>Total:</strong> $${total}</p>
        <p><strong>Location:</strong> ${data.address}</p>
        <hr />
        <p>We'll confirm your appointment shortly. You can cancel anytime by replying to this email.</p>
        <p>Questions? Call us at <strong>725-315-1011</strong></p>
      `;

      console.log('Customer Email:', customerMessage);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}

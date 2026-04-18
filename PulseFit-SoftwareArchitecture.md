# PulseFit – Software Architecture Design (Refined Version)

## 1. Overview of Case Study, Organisation, and Process

### Overview of Case Study

**PulseFit** is a mobile fitness and health tracking application with over 1.2 million active users. The system integrates with wearable devices such as smartwatches and fitness bands to continuously collect health metrics including:

- Heart rate
- Steps
- Sleep
- Calories

The application allows users to monitor their fitness progress, follow structured training plans, and gain insights into their health data over time.

### Organisation

The PulseFit ecosystem consists of multiple stakeholders:

- **Users**: Track health data, log workouts, view dashboards, and subscribe to training plans
- **Coaches**: Create and publish training programs for users
- **Device Manufacturers**: Integrate wearable devices via APIs to send health data
- **Health Team**: Ensure the scientific validity of training plans
- **Premium Users**: Access advanced analytics and premium training content

### Current Situation & Problems

As the system continuously collects large volumes of time-series data, several issues arise:

- Data from wearable devices may arrive duplicate or out-of-order, affecting accuracy
- The dashboard is slow, as it recalculates metrics from raw data each time
- Users may lose historical data when switching devices
- Training plans are not personalised to user performance
- There is no support for data export or account deletion, limiting user control

### System Process (High-Level Flow)

```
Wearable Device → API Gateway → Data Ingestion → Message Queue → 
Processing Service → Database → Analytics → Dashboard
```

This pipeline ensures continuous data collection, processing, and visualization.

---

## 2. Functional Requirements & Quality Attributes

### Functional Requirements

The system must support the following functionalities:

1. Continuous syncing of health data from wearable devices
2. Viewing health summaries (daily, weekly, monthly)
3. Manual workout logging when devices are not used
4. Creation and publishing of training plans by coaches
5. Personalised training plans based on user performance
6. Subscription to training plans
7. Export of personal health data
8. Deletion of user accounts and associated data

### Quality Attributes

To ensure system effectiveness, the following quality attributes are prioritised:

| Attribute | Description |
|-----------|-------------|
| **Performance** | The dashboard must load quickly and avoid expensive real-time computations |
| **Scalability** | The system must handle millions of users and large volumes of time-series data |
| **Reliability** | Data syncing and processing must be consistent and fault-tolerant |
| **Data Integrity** | The system must prevent duplicate and incorrect data |
| **Security & Privacy** | User data must be protected and controllable by the user |
| **Maintainability** | The system should be modular and easy to extend |

---

## 3. Architecture Model

### Use Case Diagram

The system involves three main actors:

- **User**
- **Coach**
- **Device API**

Key interactions include:
- Syncing data
- Viewing dashboards
- Managing workouts
- Subscribing to plans
- Managing personal data

> 👉 *(Insert Use Case Diagram Here)*

### Component Diagram

The architecture is based on a microservices structure with clearly separated components:

1. **Mobile App** (Frontend)
2. **API Gateway**
3. **Data Ingestion Service**
4. **Message Queue**
5. **Processing Service**
6. **Time-Series Database**
7. **User Database**
8. **Analytics Service**

Data flows sequentially through these components, ensuring efficient data handling and processing.

> 👉 *(Insert Component Diagram Here)*

### Architecture Overview

The system adopts a **Microservices Architecture** combined with a **Message Queue** to support scalability and reliability.

Incoming data is asynchronously processed through the queue, reducing system load and ensuring smooth data handling even under high traffic.

---

## 4. Selected Tactics to Enhance Quality Attributes

To address system challenges, several architectural tactics are applied:

### Performance

- **Caching** reduces repeated data computation
- **Pre-computation of summaries** improves dashboard speed

### Data Integrity

- **Deduplication** removes repeated data entries
- **Timestamp ordering** ensures correct data sequence

### Scalability

- **Microservices architecture** allows independent scaling of components
- **Load balancing** distributes traffic efficiently

### Reliability

- **Message Queue** ensures data is not lost during processing
- **Retry and idempotent processing** handle failures safely

### Security & Privacy

- **Encryption** protects sensitive health data
- **Authentication & Authorization** ensure secure access

These tactics directly improve system quality and align with the identified quality attributes.

---

## 5. Technical Decisions

### Technology Stack

| Layer | Technology Options |
|-------|-------------------|
| **Frontend** | Flutter / React Native |
| **Backend** | Node.js / Java (Spring Boot) |
| **Database** | InfluxDB (Time-Series Data) / PostgreSQL (User Data) |
| **Messaging** | Kafka / RabbitMQ |
| **Cloud** | AWS / GCP |
| **API** | REST / GraphQL |

### Justification of Decisions

- **Kafka** supports high-throughput real-time data ingestion
- **InfluxDB** is optimized for time-series sensor data
- **PostgreSQL** efficiently manages structured user data
- **Cloud platforms** provide scalability, reliability, and availability
- **Microservices architecture** enables flexibility, maintainability, and independent deployment

These technical decisions ensure the system meets performance, scalability, and reliability requirements.

---

## 6. Conclusion

The proposed architecture effectively addresses the challenges in PulseFit by:

✅ Improving system performance and dashboard responsiveness  
✅ Supporting scalability for a large user base  
✅ Ensuring accurate and reliable data processing  
✅ Enabling personalised training experiences  
✅ Providing strong data privacy and user control  

This design aligns with both functional requirements and quality attributes, making it suitable for a large-scale fitness tracking platform.

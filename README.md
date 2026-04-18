# PulseFit – Software Architecture Design

## 1. Overview of Case Study, Organisation, and Process

### Overview of Case Study

**PulseFit** is a mobile fitness and health tracking application with over 1.2 million active users. The system integrates with wearable devices such as smartwatches and fitness bands to continuously collect health metrics including:

- Heart rate
- Steps
- Sleep
- Calories

The application allows users to monitor their fitness progress, follow structured training plans, and gain insights into their health data over time. At this scale, PulseFit becomes a data-intensive platform that requires careful architectural design.

### Organisation

The PulseFit ecosystem consists of multiple stakeholders:

- **Users**: Track health data, log workouts, view dashboards, and subscribe to training plans
- **Coaches**: Create and publish training programs for users
- **Device Manufacturers**: Integrate wearable devices via APIs to send health data
- **Health Team**: Ensure the scientific validity of training plans
- **Premium Users**: Access advanced analytics and premium training content

### Current Situation & Problems

As the system continuously collects large volumes of time-series data, several issues arise:

- Data from wearable devices may arrive **duplicate or out-of-order**, affecting accuracy and user trust
- The **dashboard is slow**, as it recalculates metrics from raw data each time
- Users may **lose historical data** when switching devices
- **Training plans are not personalised** to user performance
- There is **no support for data export or account deletion**, limiting user control

### System Process (High-Level Flow)

```
Wearable Device → API Gateway → Data Ingestion → Message Queue →
Processing Service → Database → Analytics → Dashboard
```

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

| Attribute | Description |
|-----------|-------------|
| **Performance** | The dashboard must load quickly and avoid expensive real-time computations |
| **Scalability** | The system must handle millions of users and large volumes of time-series data |
| **Accuracy (Data Integrity)** | The system must prevent duplicate and out-of-order data |
| **Privacy** | User data must be protected and fully controllable by the user |
| **Reliability** | Data syncing and processing must be consistent and fault-tolerant |

---

## 3. Architecture Model

### Use Case Diagram

The system involves three main actors:

- **User** — Sync data, view dashboard, log workout, subscribe to plan, export data, delete account
- **Coach** — Create training plan, publish plan
- **Device API** — Send health data

### Component Diagram

The architecture is based on a microservices structure with the following layers:

**Client Layer**
- Mobile App (Flutter / React Native)
- Web Portal

**API Layer**
- API Gateway — routes all incoming requests via REST API

**Service Layer**
- Data Ingestion Service — handles deduplication and timestamp ordering
- Auth Service — manages authentication and authorisation

**Messaging**
- Message Queue (Kafka / RabbitMQ) — decouples ingestion from processing

**Processing**
- Processing Service — consumes events from the queue, applies business logic

**Data Layer**
- Time-Series Database (InfluxDB) — stores sensor data efficiently
- User Database (PostgreSQL) — stores structured user and plan data

**Analytics**
- Analytics Service — pre-aggregates summaries, feeds the dashboard
- Cache (Redis) — stores pre-computed dashboard data for fast access

---

## 4. Selected Tactics to Enhance Quality Attributes

### Data Quality — Duplicate Data
- **Unique ID per data point** — each sensor reading is tagged with a unique identifier so duplicates can be detected and rejected at ingestion

### Data Quality — Out-of-Order Data
- **Timestamp-based sorting** — the Data Ingestion Service reorders events by their device timestamp before processing

### Performance
- **Pre-aggregation** — summaries (daily, weekly, monthly) are computed in advance and stored in cache
- **Redis cache** — the dashboard reads from cache instead of querying raw data each time

### Scalability
- **Message Queue (Kafka)** — asynchronous processing decouples ingestion from downstream services, allowing each component to scale independently

### Reliability
- **Retry and idempotent processing** — failed messages are retried safely without creating duplicates

---

## 5. Technical Decisions

### Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Flutter / React Native |
| **Backend** | Node.js / Java (Spring Boot) |
| **Time-Series Database** | InfluxDB |
| **Relational Database** | PostgreSQL |
| **Messaging** | Kafka / RabbitMQ |
| **Batch Processing** | Apache Spark |
| **Cache** | Redis |
| **Cloud** | AWS / GCP |
| **API** | REST / GraphQL |

### Justification of Decisions

- **Kafka** supports high-throughput real-time data ingestion and decouples services
- **InfluxDB** is optimised for time-series sensor data with efficient compression and querying
- **PostgreSQL** efficiently manages structured user, coach, and plan data
- **Apache Spark** enables batch processing for large-scale analytics and pre-aggregation jobs
- **Redis** provides fast in-memory cache for pre-computed dashboard summaries
- **Cloud platforms (AWS / GCP)** provide scalability, reliability, and managed infrastructure

---

## 6. Conclusion

The proposed architecture effectively addresses the challenges in PulseFit by:

- Improving system **performance** and dashboard responsiveness through pre-aggregation and caching
- Supporting **scalability** for 1.2 million+ users via microservices and Kafka
- Ensuring **accurate and reliable** data through unique ID deduplication and timestamp sorting
- Enabling **personalised** training experiences through adaptive algorithms
- Providing strong **privacy and data control** through export and delete features
